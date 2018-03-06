import {DataStore} from "../base/DataStore.js";

export class Score {
    constructor() {
        this.ctx = DataStore.getInstance().ctx;
        this.scoreNum = 0;
        // 以为canvas刷新的很快，所以需要一个变量控制加分只加一次
        this.isScore = true;
    }

    draw() {
        this.ctx.font = '25px Arial';
        this.ctx.fillStyle = '#ffd9fa';
        this.ctx.fillText(
            this.scoreNum,
            DataStore.getInstance().canvas.width / 2, DataStore.getInstance().canvas.height / 18,
            1000 // 可选。允许的最大文本宽度，以像素计。
        )
    }
}