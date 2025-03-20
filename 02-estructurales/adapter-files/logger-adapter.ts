import { Logger } from "jsr:@deno-library/logger";
import { COLORS } from "../../helpers/colors.ts";

interface ILoggerAdapter {
  file: string;

  writeLog: (msg: string) => void;
  writeWarning: (msg: string) => void;
  writeError: (msg: string) => void;
}

export class DenoLoggerAdapter implements ILoggerAdapter {
  public file: string;
  private logger = new Logger();

  constructor(file: string) {
    this.file = file;
  }

  writeLog(msg: string) {
    this.logger.info(`[${this.file} Log] ${msg}`);
  }

  writeWarning(msg: string){
    this.logger.warn(`[${this.file} error] %c${msg}`, COLORS.red);
  }

  writeError(msg: string) {
    this.logger.error(`[${this.file} warning] %c${msg}`, COLORS.yellow);
  }
}

// const logger = new Logger();

// logger.info('');
// logger.warn('');
// logger.error('');
