// 시간 날짜 차이 계산 함수
export function formatRelativeTime(date1: Date, date2: string): string {

    const diffInMilliseconds = date1.getTime() - new Date(date2).getTime();
    const rtf = new Intl.RelativeTimeFormat('ko', { numeric: 'auto' });

    if (diffInMilliseconds < 60 * 1000) { // 1분 미만

        const seconds = Math.floor(diffInMilliseconds / 1000);

        return rtf.format(-seconds, 'second');

    } else if (diffInMilliseconds < 3600 * 1000) { // 1시간 미만

        const minutes = Math.floor(diffInMilliseconds / (60 * 1000));

        return minutes !== 2 ? rtf.format(-minutes, 'minute') : '2일 전';

    } else if (diffInMilliseconds < 24 * 3600 * 1000) { // 1일 미만

        const hours = Math.floor(diffInMilliseconds / (3600 * 1000));

        return rtf.format(-hours, 'hour');

    } else if (diffInMilliseconds < 30 * 24 * 3600 * 1000) { // 1달 미만

        const days = Math.floor(diffInMilliseconds / (24 * 3600 * 1000));

        return rtf.format(-days, 'day');

    } else if (diffInMilliseconds < 365 * 24 * 3600 * 1000) { // 1년 미만

        const months = Math.floor(diffInMilliseconds / (30 * 24 * 3600 * 1000));

        return rtf.format(-months, 'month');
    } else { // 1년 이상
        
        const years = Math.floor(diffInMilliseconds / (365 * 24 * 3600 * 1000));

        return (years !== 1) ? rtf.format(-years, 'year') : '1년 전';
    }
}

