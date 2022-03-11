struct TAccountRpcDTO {
    1: i64 uid,
    2: string name,
}

service TAccountService {
    // 创建一个账号
    void createAccount(1: TAccountRpcDTO tAccountRpcDTO);

    // 获取某个账号
    TAccountRpcDTO getAccount(1: i64 uid);
}