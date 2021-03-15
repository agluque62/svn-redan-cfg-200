import { Injectable } from "@angular/core";
import { NativeDateAdapter } from "@angular/material/core";

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter  {

    compareDateWithTime(date: Date, dateToCompare: Date) {

        if (date.getTime() === dateToCompare.getTime()) {
            return 0;
        }

        if (date > dateToCompare) {
            return 1;
        }

        return -1;
    }

    getHour(date: Date): number {
        return date.getHours();
    }

    setHour(date: Date, hours: number): void {
        date.setHours(hours);
    }

    getMinute(date: Date): number {
        return date.getMinutes();
    }

    setMinute(date: Date, minutes: number): void {
        date.setMinutes(minutes);
    }

    getSecond(date: Date): number {
        return date.getSeconds();
    }

    setSecond(date: Date, seconds: number): void {
        date.setSeconds(seconds);
    }

    getDayOfWeekNames(): string[] {
        return ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
    }

    getMonthNames(): string[] {
        return ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    }

    getFirstDayOfWeek(): number {
        return 1;
    }

    copyTime(date: Date): number {
        console.log('copy', date);
        return date.getTime();
    }

    parse(value: any): Date | null {
        console.log(value);

        if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
            const str = value.split('/');
            const year = Number(str[2]);
            const month = Number(str[1]) - 1;
            const date = Number(str[0]);
            return new Date(year, month, date);
        }
        const timestamp = typeof value === 'number' ? value : Date.parse(value);

        return isNaN(timestamp) ? null : new Date(timestamp);
    }

    format(date: Date, displayFormat: any): string {
        if (displayFormat === "input" || displayFormat === "l, LTS") {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            return `${this._to2digit(day)}/${this._to2digit(month)}/${year} ${this._to2digit(hours)}:${this._to2digit(minutes)}`;
        } else if (displayFormat === "MMM YYYY") {
            return `${this.getMonthNames()[date.getMonth()]} ${date.getFullYear()}`;
        } else {
            return `${this._to2digit(date.getDay())}/${this._to2digit(date.getMonth()+1)}/${date.getFullYear()} ${this._to2digit(date.getHours())}:${this._to2digit(date.getMinutes())}`;
        }
    }

    private _to2digit(n: number) {
        return (`00${n}`).slice(-2);
    }
}