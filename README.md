# Yandex Storage SDK

SDK for the Yandex cloud storage based on Amazon Simple Storage Service (Amazon S3)

## Quick Start
### Installation
```bash
$ npm install yandex-storage-sdk
```

### Usage
```typescript
import YandexStorageSdk from 'yandex-storage-sdk'

const storage = new YandexStorageSdk(YANDEX_ACCESS_KEY_ID, YANDEX_SECRET_ACCESS_KEY, YANDEX_BUCKET_NAME)
or
const storage = new YandexStorageSdk(YANDEX_ACCESS_KEY_ID, YANDEX_SECRET_ACCESS_KEY)
storage.setBucket(YANDEX_BUCKET_NAME)
```

## Resources
- See full API documentation in the [Document Center](https://cloud.yandex.com/en-ru/docs/storage/s3/api-ref)

## License
This software is licensed under the MIT License. [View the license](LICENSE).