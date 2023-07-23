class StorageService {
  get(key: string) {
    const value = localStorage.getItem(key);
    let parsedValue;

    try {
      parsedValue = value ? JSON.parse(value) : null;
    } catch (e) {
      parsedValue = value;
    }

    return parsedValue;
  }

  set<T = unknown>(key: string, value: T) {
    const stringifiedValue = JSON.stringify(value);

    localStorage.setItem(key, stringifiedValue);
  }
}

export const LocalStorage = new StorageService();
