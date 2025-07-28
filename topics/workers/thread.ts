import { Worker } from "worker_threads";

function runWorkerTask(workerData: any) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker-task.js", { workerData });
    worker.on("message", resolve);
    worker.on("error", reject);
  });
}
