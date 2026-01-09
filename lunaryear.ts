export class LunarYear {
  private PI = Math.PI;
  private CAN = ['Giáp','Ất','Bính','Đinh','Mậu','Kỷ','Canh','Tân','Nhâm','Quý'];
  private CHI = ['Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi'];

  private INT(d: number): number {
    return Math.floor(d);
  }

  private jdFromDate(dd: number, mm: number, yy: number): number {
    let a = this.INT((14 - mm) / 12);
    let y = yy + 4800 - a;
    let m = mm + 12 * a - 3;
    return dd + this.INT((153 * m + 2) / 5) + 365 * y
      + this.INT(y / 4) - this.INT(y / 100)
      + this.INT(y / 400) - 32045;
  }

  private getNewMoonDay(k: number, timeZone: number): number {
    let T = k / 1236.85;
    let T2 = T * T;
    let T3 = T2 * T;
    let dr = this.PI / 180;

    let Jd1 = 2415020.75933 + 29.53058868 * k
      + 0.0001178 * T2 - 0.000000155 * T3;

    let M = 359.2242 + 29.10535608 * k
      - 0.0000333 * T2 - 0.00000347 * T3;

    let Mpr = 306.0253 + 385.81691806 * k
      + 0.0107306 * T2 + 0.00001236 * T3;

    let F = 21.2964 + 390.67050646 * k
      - 0.0016528 * T2 - 0.00000239 * T3;

    let C1 = (0.1734 - 0.000393 * T) * Math.sin(dr * M)
      + 0.0021 * Math.sin(2 * dr * M)
      - 0.4068 * Math.sin(dr * Mpr)
      + 0.0161 * Math.sin(2 * dr * Mpr)
      - 0.0004 * Math.sin(3 * dr * Mpr)
      + 0.0104 * Math.sin(2 * dr * F);

    let JdNew = Jd1 + C1;
    return this.INT(JdNew + 0.5 + timeZone / 24);
  }

  private getSunLongitude(jdn: number, timeZone: number): number {
    let T = (jdn - 2451545.5 - timeZone / 24) / 36525;
    let T2 = T * T;
    let dr = this.PI / 180;

    let M = 357.52910 + 35999.05030 * T
      - 0.0001559 * T2 - 0.00000048 * T * T2;

    let L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2;

    let DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M)
      + (0.019993 - 0.000101 * T) * Math.sin(2 * dr * M)
      + 0.000290 * Math.sin(3 * dr * M);

    let L = (L0 + DL) * dr;
    L = L - this.PI * 2 * this.INT(L / (this.PI * 2));
    return this.INT(L / this.PI * 6);
  }

  private getLunarMonth11(yy: number, timeZone: number): number {
    let off = this.jdFromDate(31, 12, yy) - 2415021;
    let k = this.INT(off / 29.530588853);
    let nm = this.getNewMoonDay(k, timeZone);
    let sunLong = this.getSunLongitude(nm, timeZone);
    if (sunLong >= 9) {
      nm = this.getNewMoonDay(k - 1, timeZone);
    }
    return nm;
  }

  private solarToLunar(dd: number, mm: number, yy: number, timeZone = 7) {
    let dayNumber = this.jdFromDate(dd, mm, yy);
    let k = this.INT((dayNumber - 2415021.076998695) / 29.530588853);
    let monthStart = this.getNewMoonDay(k + 1, timeZone);
    if (monthStart > dayNumber) {
      monthStart = this.getNewMoonDay(k, timeZone);
    }

    let a11 = this.getLunarMonth11(yy, timeZone);
    let lunarYear;

    if (a11 >= monthStart) {
      lunarYear = yy;
      a11 = this.getLunarMonth11(yy - 1, timeZone);
    } else {
      lunarYear = yy + 1;
    }

    let lunarDay = dayNumber - monthStart + 1;
    let diff = this.INT((monthStart - a11) / 29);
    let lunarMonth = diff + 11;
    if (lunarMonth > 12) lunarMonth -= 12;
    if (lunarMonth <= 0) lunarMonth += 12;

    return [lunarDay, lunarMonth, lunarYear];
  }

  convert(dd: number, mm: number, yy: number) {
    const [ld, lm, ly] = this.solarToLunar(dd, mm, yy);
    const jd = this.jdFromDate(dd, mm, yy);
    const wd = new Date(yy, mm - 1, dd).getDay();

    return {
      weekday: `Ngày thứ ${wd === 0 ? 7 : wd}`,
      lunarDate: `${ld}/${lm}/${ly}`,
      year: `${this.CAN[(ly + 6) % 10]} ${this.CHI[(ly + 8) % 12]}`,
      month: `${this.CAN[(ly * 12 + lm + 3) % 10]} ${this.CHI[(lm + 1) % 12]}`,
      day: `${this.CAN[(jd + 9) % 10]} ${this.CHI[(jd + 1) % 12]}`
    };
  }
}
