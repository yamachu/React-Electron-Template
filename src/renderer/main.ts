import { range } from 'rxjs';

console.log('Hello Electron');

range(1, 3).subscribe(
    (v) => console.log(v),
    (e) => console.error(e),
    () => console.log('ダーッ！')
);
