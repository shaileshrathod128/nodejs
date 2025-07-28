import cluster from "cluster";
import os from "os";

if (cluster.isPrimary) {
  os.cpus().forEach(() => cluster.fork());
} else {
  require("./app");
}
