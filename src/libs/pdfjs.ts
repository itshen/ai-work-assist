import * as pdfDist from "pdfjs-dist";

// 使用 CDN 方式加载 worker
const PDFJS_CDN = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

// 设置 worker
pdfDist.GlobalWorkerOptions.workerSrc = PDFJS_CDN;

export {
    pdfDist
}
