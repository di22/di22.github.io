import { Injectable } from '@angular/core';
import {enc, AES, mode, pad} from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {

  tokenFromUI = 'TW9qT21hQFNlY3JlODJleQ==';
  tokenIv = 'S2V5SVYzMzgjcjgyMXc5Mg==';
  encrypted: any;
  decrypted: string;
   key = enc.Base64.parse(this.tokenFromUI);
   iv =  enc.Utf8.parse(this.tokenIv);
  request: string;
  constructor() {}
  encryptUsingAES256(request) {
    this.encrypted = AES.encrypt(
      request, this.key, {
        keySize: 16,
        iv: this.iv,
        mode: mode.CBC,
        padding: pad.Pkcs7
      }).ciphertext.toString(enc.Base64);
    return this.encrypted;
  }
  decryptUsingAES256(encrypted) {
    this.decrypted = AES.decrypt(
      encrypted, this.key, {
        keySize: 16,
        iv: this.iv,
        mode: mode.ECB,
        padding: pad.Pkcs7
      }).toString(enc.Utf8);
  }


}
