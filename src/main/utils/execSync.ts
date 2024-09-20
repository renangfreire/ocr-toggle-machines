import { exec } from "child_process";
import { promisify } from "node:util"

export const execSync = promisify(exec)