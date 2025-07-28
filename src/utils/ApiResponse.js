class ApiResponse {
  constructor(sattusCode, data, massage = "success") {
    this.sattusCode = sattusCode;
    this.data = data;
    this.massage = massage;
    this.success = sattusCode < 400;
  }
}
