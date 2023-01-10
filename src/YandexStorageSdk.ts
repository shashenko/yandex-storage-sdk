import S3 from 'aws-sdk/clients/s3.js'
import AWS from 'aws-sdk'
const { Endpoint } = AWS
const BASE_URL = 'https://storage.yandexcloud.net'

export type AbortMultipartUploadParams = Omit<S3.AbortMultipartUploadRequest, 'Bucket'>
export type CompleteMultipartUploadParams = Omit<S3.CompleteMultipartUploadRequest, 'Bucket'>
export type CreateMultipartUploadParams = Omit<S3.CreateMultipartUploadRequest, 'Bucket'>
export type HeadObjectParams = Omit<S3.HeadObjectRequest, 'Bucket'>
export type ListObjectsParams = Omit<S3.ListObjectsRequest, 'Bucket'>
export type PutObjectParams = Omit<S3.PutObjectRequest, 'Bucket'>
export type GetObjectParams = Omit<S3.GetObjectRequest, 'Bucket'>
export type DeleteObjectParams = Omit<S3.DeleteObjectRequest, 'Bucket'>
export type UploadPartParams = Omit<S3.UploadPartRequest, 'Bucket'>

export default class YandexStorageSdk {
    private readonly s3: S3
    private bucket: string

    constructor(accessKeyId: string, secretAccessKey: string, bucket?: string) {
        if (bucket) {
            this.setBucket(bucket)
        }
        this.s3 = new S3({
            endpoint: new Endpoint(BASE_URL),
            credentials: { accessKeyId, secretAccessKey },
        })
    }

    public setBucket(bucket: string): void {
        this.bucket = bucket
    }

    public async getBucketLocation(): Promise<S3.GetBucketLocationOutput> {
        return await new Promise((resolve, reject) => {
            this.s3.getBucketLocation({ Bucket: this.bucket }, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    public async getBucketVersioning(): Promise<S3.GetBucketVersioningOutput> {
        return await new Promise((resolve, reject) => {
            this.s3.getBucketVersioning({ Bucket: this.bucket }, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    public async headObject(params: HeadObjectParams): Promise<S3.HeadObjectOutput> {
        const preparedParams = Object.assign(params, { Bucket: this.bucket })
        return await new Promise((resolve, reject) => {
            this.s3.headObject(preparedParams, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    public async listObjects(params: ListObjectsParams = {}): Promise<S3.ListObjectsOutput> {
        const preparedParams = Object.assign(params, { Bucket: this.bucket })
        return await new Promise((resolve, reject) => {
            this.s3.listObjects(preparedParams, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    public async putObject(params: PutObjectParams): Promise<S3.PutObjectOutput> {
        const preparedParams = Object.assign(params, { Bucket: this.bucket })
        return await new Promise((resolve, reject) => {
            this.s3.putObject(preparedParams, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    public async getObject(params: GetObjectParams): Promise<S3.GetObjectOutput> {
        const preparedParams = Object.assign(params, { Bucket: this.bucket })
        return await new Promise((resolve, reject) => {
            this.s3.getObject(preparedParams, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    public async deleteObject(params: DeleteObjectParams): Promise<S3.DeleteObjectOutput> {
        const preparedParams = Object.assign(params, { Bucket: this.bucket })
        return await new Promise((resolve, reject) => {
            this.s3.deleteObject(preparedParams, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    public async upload(params: PutObjectParams): Promise<S3.PutObjectOutput> {
        const preparedParams = Object.assign(params, { Bucket: this.bucket })
        return await new Promise((resolve, reject) => {
            this.s3.upload(preparedParams, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    public async createMultipartUpload(params: CreateMultipartUploadParams): Promise<S3.CreateMultipartUploadOutput> {
        const preparedParams = Object.assign(params, { Bucket: this.bucket })
        return await new Promise((resolve, reject) => {
            this.s3.createMultipartUpload(preparedParams, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    public async uploadPart(params: UploadPartParams): Promise<S3.UploadPartOutput> {
        const preparedParams = Object.assign(params, { Bucket: this.bucket })
        return await new Promise((resolve, reject) => {
            this.s3.uploadPart(preparedParams, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    public async completeMultipartUpload(params: CompleteMultipartUploadParams): Promise<S3.CompleteMultipartUploadOutput> {
        const preparedParams = Object.assign(params, { Bucket: this.bucket })
        return await new Promise((resolve, reject) => {
            this.s3.completeMultipartUpload(preparedParams, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    public async abortMultipartUpload(params: AbortMultipartUploadParams): Promise<S3.AbortMultipartUploadOutput> {
        const preparedParams = Object.assign(params, { Bucket: this.bucket })
        return await new Promise((resolve, reject) => {
            this.s3.abortMultipartUpload(preparedParams, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    public getObjectPath({ Key }: { Key: string }): string {
        return `${BASE_URL}/${this.bucket}/${Key}`
    }
}