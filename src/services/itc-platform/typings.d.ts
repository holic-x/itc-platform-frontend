declare namespace API {
  type BaseResponseBiResponse_ = {
    code?: number;
    data?: BiResponse;
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseBossJobVO_ = {
    code?: number;
    data?: BossJobVO;
    message?: string;
  };

  type BaseResponseChart_ = {
    code?: number;
    data?: Chart;
    message?: string;
  };

  type BaseResponseDataInfoVO_ = {
    code?: number;
    data?: DataInfoVO;
    message?: string;
  };

  type BaseResponseInt_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseInterfaceInfo_ = {
    code?: number;
    data?: InterfaceInfo;
    message?: string;
  };

  type BaseResponseListInterfaceInfoStatisticVO_ = {
    code?: number;
    data?: InterfaceInfoStatisticVO[];
    message?: string;
  };

  type BaseResponseListInterfaceInfoVO_ = {
    code?: number;
    data?: InterfaceInfoVO[];
    message?: string;
  };

  type BaseResponseListNotificationVO_ = {
    code?: number;
    data?: NotificationVO[];
    message?: string;
  };

  type BaseResponseListUserInterfaceInfo_ = {
    code?: number;
    data?: UserInterfaceInfo[];
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseNotificationVO_ = {
    code?: number;
    data?: NotificationVO;
    message?: string;
  };

  type BaseResponseObject_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageBossJobVO_ = {
    code?: number;
    data?: PageBossJobVO_;
    message?: string;
  };

  type BaseResponsePageChart_ = {
    code?: number;
    data?: PageChart_;
    message?: string;
  };

  type BaseResponsePageDataInfo_ = {
    code?: number;
    data?: PageDataInfo_;
    message?: string;
  };

  type BaseResponsePageDataInfoVO_ = {
    code?: number;
    data?: PageDataInfoVO_;
    message?: string;
  };

  type BaseResponsePageFetchPostVO_ = {
    code?: number;
    data?: PageFetchPostVO_;
    message?: string;
  };

  type BaseResponsePageInterfaceInfo_ = {
    code?: number;
    data?: PageInterfaceInfo_;
    message?: string;
  };

  type BaseResponsePageNotificationVO_ = {
    code?: number;
    data?: PageNotificationVO_;
    message?: string;
  };

  type BaseResponsePagePost_ = {
    code?: number;
    data?: PagePost_;
    message?: string;
  };

  type BaseResponsePagePostVO_ = {
    code?: number;
    data?: PagePostVO_;
    message?: string;
  };

  type BaseResponsePageTemplate_ = {
    code?: number;
    data?: PageTemplate_;
    message?: string;
  };

  type BaseResponsePageTemplateVO_ = {
    code?: number;
    data?: PageTemplateVO_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserInterfaceInfo_ = {
    code?: number;
    data?: PageUserInterfaceInfo_;
    message?: string;
  };

  type BaseResponsePageUserSignVO_ = {
    code?: number;
    data?: PageUserSignVO_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponsePostVO_ = {
    code?: number;
    data?: PostVO;
    message?: string;
  };

  type BaseResponseSearchVO_ = {
    code?: number;
    data?: SearchVO;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseTemplateVO_ = {
    code?: number;
    data?: TemplateVO;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserInterfaceInfo_ = {
    code?: number;
    data?: UserInterfaceInfo;
    message?: string;
  };

  type BaseResponseUserSignVO_ = {
    code?: number;
    data?: UserSignVO;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type BatchDeleteRequest = {
    idList?: number[];
  };

  type bindEmailUsingGETParams = {
    /** code */
    code: string;
    /** email */
    email: string;
  };

  type BiResponse = {
    chartId?: number;
    genChart?: string;
    genResult?: string;
  };

  type BossJobQueryRequest = {
    area?: string;
    company?: string;
    current?: number;
    desc?: string;
    name?: string;
    pageSize?: number;
    salary?: string;
    sortField?: string;
    sortOrder?: string;
  };

  type BossJobVO = {
    area?: string;
    company?: string;
    createTime?: string;
    descr?: string;
    id?: number;
    link?: string;
    name?: string;
    salary?: string;
    updateTime?: string;
  };

  type Chart = {
    chartData?: string;
    chartType?: string;
    createTime?: string;
    execMessage?: string;
    genChart?: string;
    genResult?: string;
    goal?: string;
    id?: number;
    isDelete?: number;
    name?: string;
    status?: string;
    updateTime?: string;
    userId?: number;
  };

  type ChartAddRequest = {
    chartData?: string;
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type ChartEditRequest = {
    chartData?: string;
    chartType?: string;
    goal?: string;
    id?: number;
    name?: string;
  };

  type ChartQueryRequest = {
    chartType?: string;
    current?: number;
    goal?: string;
    id?: number;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type ChartUpdateRequest = {
    chartData?: string;
    chartType?: string;
    createTime?: string;
    genChart?: string;
    genResult?: string;
    goal?: string;
    id?: number;
    isDelete?: number;
    name?: string;
    updateTime?: string;
  };

  type checkUsingGETParams = {
    /** echostr */
    echostr?: string;
    /** nonce */
    nonce?: string;
    /** signature */
    signature?: string;
    /** timestamp */
    timestamp?: string;
  };

  type DataInfo = {
    createTime?: string;
    creater?: number;
    dataContent?: string;
    dataName?: string;
    dataType?: string;
    id?: number;
    isDelete?: number;
    status?: number;
    updateTime?: string;
    updater?: number;
  };

  type DataInfoAddRequest = {
    dataContent?: string;
    dataName?: string;
    dataType?: string;
  };

  type DataInfoQueryRequest = {
    creater?: number;
    current?: number;
    dataContent?: string;
    dataName?: string;
    dataType?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
  };

  type DataInfoStatusUpdateRequest = {
    id?: number;
    operType?: string;
  };

  type DataInfoUpdateRequest = {
    dataContent?: string;
    dataName?: string;
    dataType?: string;
    id?: number;
    status?: number;
  };

  type DataInfoVO = {
    createTime?: string;
    creater?: UserVO;
    createrName?: string;
    dataContent?: string;
    dataName?: string;
    dataType?: string;
    id?: number;
    isDelete?: number;
    status?: number;
    updateTime?: string;
    updater?: UserVO;
  };

  type DeleteRequest = {
    id?: number;
  };

  type FetchPostQueryRequest = {
    content?: string;
    current?: number;
    favourUserId?: number;
    id?: number;
    notId?: number;
    orTags?: string[];
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    tags?: string[];
    title?: string;
    userId?: number;
    userName?: string;
  };

  type FetchPostVO = {
    category?: string;
    commentNum?: number;
    content?: string;
    createTime?: string;
    favourNum?: number;
    id?: number;
    status?: number;
    tagList?: string[];
    tags?: string;
    thumbNum?: number;
    title?: string;
    updateTime?: string;
    userId?: string;
    userInfo?: string;
    userName?: string;
    viewNum?: number;
  };

  type genChartByAiAsyncMqUsingPOSTParams = {
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type genChartByAiAsyncUsingPOSTParams = {
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type genChartByAiSyncUsingPOSTParams = {
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type getBossJobVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getChartVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getDataInfoVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getInterfaceInfoVOByIdUsingGET1Params = {
    /** id */
    id?: number;
  };

  type getInterfaceInfoVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getNotificationVOByDomainUsingGETParams = {
    /** domain */
    domain?: string;
  };

  type getNotificationVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getPostVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getTemplateVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserInterfaceInfoByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserSignVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type HandleInterfaceInfoStatusRequest = {
    id?: number;
    status?: number;
  };

  type IdRequest = {
    id?: number;
  };

  type InterfaceInfo = {
    avatar?: string;
    createTime?: string;
    description?: string;
    id?: number;
    isDelete?: number;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    requestSample?: string;
    responseHeader?: string;
    responseParams?: string;
    sourceType?: string;
    status?: number;
    updateTime?: string;
    url?: string;
    userId?: number;
  };

  type InterfaceInfoAddRequest = {
    description?: string;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    responseParams?: string;
    url?: string;
  };

  type InterfaceInfoInvokeRequest = {
    id?: number;
    userRequestParams?: string;
  };

  type InterfaceInfoQueryRequest = {
    createTime?: string;
    current?: number;
    description?: string;
    id?: number;
    isDelete?: number;
    method?: string;
    name?: string;
    pageSize?: number;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    updateTime?: string;
    url?: string;
    userId?: number;
  };

  type InterfaceInfoStatisticQueryRequest = {
    interfaceName?: string;
    interfaceStatus?: string;
    interfaceType?: string;
    searchText?: string;
    userName?: string;
  };

  type InterfaceInfoStatisticVO = {
    callFailNum?: string;
    callSuccessNum?: string;
    callTotal?: string;
    errStatusNum?: string;
    interfaceInfoAvatar?: string;
    interfaceInfoId?: string;
    interfaceInfoName?: string;
  };

  type InterfaceInfoUpdateRequest = {
    createTime?: string;
    description?: string;
    id?: number;
    isDelete?: number;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    status?: number;
    updateTime?: string;
    url?: string;
    userId?: number;
  };

  type InterfaceInfoVO = {
    avatar?: string;
    createTime?: string;
    description?: string;
    id?: number;
    isDelete?: number;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    requestSample?: string;
    responseHeader?: string;
    responseParams?: string;
    sourceType?: string;
    status?: number;
    totalNum?: number;
    updateTime?: string;
    url?: string;
    userId?: number;
  };

  type listUserInterfaceInfoByPageUsingGETParams = {
    current?: number;
    id?: number;
    interfaceInfoId?: number;
    leftNum?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    totalNum?: number;
    userId?: number;
  };

  type listUserInterfaceInfoUsingGETParams = {
    current?: number;
    id?: number;
    interfaceInfoId?: number;
    leftNum?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    totalNum?: number;
    userId?: number;
  };

  type LoginUserVO = {
    address?: string;
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userDescr?: string;
    userEmail?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type NotificationAddRequest = {
    content?: string;
    domain?: string;
    endTime?: string;
    startTime?: string;
    status?: number;
    title?: string;
  };

  type NotificationQueryRequest = {
    content?: string;
    current?: number;
    domain?: string;
    endTime?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    startTime?: string;
    status?: number;
    title?: string;
    userId?: string;
  };

  type NotificationStatusUpdateRequest = {
    id?: number;
    operType?: string;
  };

  type NotificationUpdateRequest = {
    content?: string;
    domain?: string;
    endTime?: string;
    id?: number;
    startTime?: string;
    status?: number;
    title?: string;
  };

  type NotificationVO = {
    content?: string;
    createTime?: string;
    domain?: string;
    endTime?: string;
    id?: number;
    startTime?: string;
    status?: number;
    title?: string;
    updateTime?: string;
    userId?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageBossJobVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: BossJobVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageChart_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Chart[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageDataInfo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: DataInfo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageDataInfoVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: DataInfoVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageFetchPostVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: FetchPostVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageInterfaceInfo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: InterfaceInfo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageNotificationVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: NotificationVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePost_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Post[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePostVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: PostVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageTemplate_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Template[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageTemplateVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: TemplateVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserInterfaceInfo_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserInterfaceInfo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserSignVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserSignVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type Picture = {
    title?: string;
    url?: string;
  };

  type Post = {
    content?: string;
    createTime?: string;
    favourNum?: number;
    id?: number;
    isDelete?: number;
    status?: number;
    tags?: string;
    thumbNum?: number;
    title?: string;
    updateTime?: string;
    userId?: number;
  };

  type PostAddRequest = {
    content?: string;
    tags?: string[];
    title?: string;
  };

  type PostEditRequest = {
    content?: string;
    id?: number;
    tags?: string[];
    title?: string;
  };

  type PostFavourAddRequest = {
    postId?: number;
  };

  type PostFavourQueryRequest = {
    current?: number;
    pageSize?: number;
    postQueryRequest?: PostQueryRequest;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type PostQueryRequest = {
    content?: string;
    current?: number;
    favourUserId?: number;
    id?: number;
    notId?: number;
    orTags?: string[];
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    tags?: string[];
    title?: string;
    userId?: number;
  };

  type PostStatusUpdateRequest = {
    id?: number;
    operType?: string;
  };

  type PostThumbAddRequest = {
    postId?: number;
  };

  type PostUpdateRequest = {
    content?: string;
    id?: number;
    tagList?: string[];
    title?: string;
  };

  type PostVO = {
    content?: string;
    createTime?: string;
    favourNum?: number;
    hasFavour?: boolean;
    hasThumb?: boolean;
    id?: number;
    status?: number;
    tagList?: string[];
    thumbNum?: number;
    title?: string;
    updateTime?: string;
    user?: UserVO;
    userId?: number;
  };

  type SearchRequest = {
    current?: number;
    pageSize?: number;
    searchText?: string;
    searchType?: string;
    sortField?: string;
    sortOrder?: string;
  };

  type SearchVO = {
    dataList?: Record<string, any>[];
    pictureList?: Picture[];
    postList?: PostVO[];
    total?: number;
    userList?: UserVO[];
  };

  type sendEmailCodeUsingGETParams = {
    /** email */
    email: string;
  };

  type Template = {
    createTime?: string;
    creater?: number;
    id?: number;
    isDelete?: number;
    status?: number;
    templateContent?: string;
    templateName?: string;
    updateTime?: string;
    updater?: number;
  };

  type TemplateAddRequest = {
    templateContent?: string;
    templateName?: string;
  };

  type TemplateQueryRequest = {
    creater?: number;
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    templateContent?: string;
    templateName?: string;
  };

  type TemplateStatusUpdateRequest = {
    id?: number;
    operType?: string;
  };

  type TemplateUpdateRequest = {
    id?: number;
    status?: number;
    templateContent?: string;
    templateName?: string;
  };

  type TemplateVO = {
    createTime?: string;
    creater?: UserVO;
    id?: number;
    isDelete?: number;
    status?: number;
    templateContent?: string;
    templateName?: string;
    updateTime?: string;
    updater?: UserVO;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type User = {
    address?: string;
    createTime?: string;
    id?: number;
    isDelete?: number;
    mpOpenId?: string;
    unionId?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userDescr?: string;
    userEmail?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
    userStatus?: number;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userDescr?: string;
    userName?: string;
    userRole?: string;
  };

  type UserInterfaceInfo = {
    createTime?: string;
    id?: number;
    interfaceInfoId?: number;
    isDelete?: number;
    leftNum?: number;
    status?: number;
    totalNum?: number;
    updateTime?: string;
    userId?: number;
  };

  type UserInterfaceInfoAddRequest = {
    interfaceInfoId?: number;
    leftNum?: number;
    totalNum?: number;
    userId?: number;
  };

  type UserInterfaceInfoUpdateRequest = {
    id?: number;
    leftNum?: number;
    status?: number;
    totalNum?: number;
  };

  type userLoginByWxOpenUsingGETParams = {
    /** code */
    code: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    mpOpenId?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
    userAccount?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
    userStatus?: number;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userName?: string;
    userPassword?: string;
  };

  type UserSignQueryRequest = {
    current?: number;
    pageSize?: number;
    signInChannel?: string;
    sortField?: string;
    sortOrder?: string;
    title?: string;
    uname?: string;
  };

  type UserSignVO = {
    id?: number;
    score?: number;
    signChannel?: string;
    signInTime?: string;
    title?: string;
    uid?: number;
    uname?: string;
  };

  type UserStatusUpdateRequest = {
    id?: number;
    operType?: string;
    userStatus?: number;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userDescr?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAccount?: string;
    userAvatar?: string;
    userDescr?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    accessKey?: string;
    address?: string;
    createTime?: string;
    grade?: string;
    id?: number;
    isDevelop?: number;
    registerChannel?: string;
    score?: number;
    secretKey?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userEmail?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
    userStatus?: number;
  };
}
