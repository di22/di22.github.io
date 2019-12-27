import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {

  tokenFromUI = 'TW9qT21hQFNlY3JlODJleQ==';
  tokenIv = 'S2V5SVYzMzgjcjgyMXc5Mg==';
  encrypted: any;
  decrypted: string;
   key = CryptoJS.enc.Base64.parse(this.tokenFromUI);
   iv = CryptoJS.enc.Utf8.parse(this.tokenIv);
  request: string;
  constructor() {}
  encryptUsingAES256(request) {
    this.encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(request), this.key, {
        keySize: 16,
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }).ciphertext.toString(CryptoJS.enc.Base64);
    return this.encrypted;
  }
  decryptUsingAES256(encrypted) {
    this.decrypted = CryptoJS.AES.decrypt(
      encrypted, this.key, {
        keySize: 16,
        iv: this.iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8);
  }


}
