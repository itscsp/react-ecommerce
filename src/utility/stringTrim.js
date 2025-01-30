export const stringTrim = (content, length = 40) => {
    let trimmed = content.slice(0, length);
    if (trimmed.length < content.length) {
      trimmed += '...';
    }
    return trimmed;
  }
  