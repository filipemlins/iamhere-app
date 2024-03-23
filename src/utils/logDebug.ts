

export function logDebug(message) {
        try {
          throw new Error();
        } catch (error) {
          const callerLine = error.stack.split('\n')[2];
          const fileName = callerLine.match(/(?<=\().+?(?=:)/)[0].split('/').pop();
          const lineNumber = callerLine.match(/(?<=:)\d+(?=:)/)[0];
          console.log(`LOG  ${fileName} linha ${lineNumber} - ${message}`);
        }
      
  };
    