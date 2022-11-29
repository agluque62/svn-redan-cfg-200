export class AppSettings {
    public static UNAUTHORIZED_ERROR_CODE = 401;
    public static TIMED_OUT_CODE = 408;
    public static AGVN_PATTERN = /^(2[0-9]{5})|(3[0-9]{5})$/;
    public static IP_PATTERN = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
    public static SUBNET_MASK = /^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/;
    public static NAME_PATTERN = /^[a-zA-Z0-9\-_.]{1,32}$/;
    public static URI_PATTERN = /^([^:]+)@((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(:([\d]{1,5}))?$/;
    public static TRAP_PATTERN = /^[1-2]+,(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/[0-9]{2,5}$/;
    public static AEREAL_VHF = /^((11[8|9])|(12[0-9])|(13[0-7])).[0-9]{2}[0|5]$/; /** 118.000 - 137.995 */
    public static AEREAL_UHF = /^([2-3][0-9][0-9]).[0-9]{2}[0|5]$/; /** 200.000 - 399.995 */
    public static AEREAL_VHF_AND_UHF = /^((11[8|9])|(12[0-9])|(13[0-7])).[0-9]{2}[0|5]$|^([2-3][0-9][0-9]).[0-9]{2}[0|5]$/
    public static TM_TONO_BLOQ = /^((0)|((100\d|10[1-9]\d|1[1-9]\d{2}|[2-4]\d{3}|5000)))$/;
    public static TM_BLOQ_LIB = /^((0)|((10\d|1[1-9]\d|[2-9]\d{2}|[1-4]\d{3}|5000)))$/;
    public static REAL_NUMBER = /^-?[0-9]+(\.[0-9])?[0-9]*$/;
    public static UMBRAL_VOX = /^-[0-9]{2}$/;
    public static COLA_VOX = /^[0-9]{1,2}$/;
    public static PORT = /^()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])$/;
    public static ONLY_NUMBERS = /^[0-9]+$/;

    // Informative Messages
    public static NUMBERS_FORMAT_INVALID = 'appsettings.NUMBERS_FORMAT_INVALID'
    public static FIELD_REQUIRED = 'appsettings.FIELD_REQUIRED'
    public static INVALID_IP = 'appsettings.INVALID_IP'
    public static INVALID_RANGE_PORT = 'appsettings.INVALID_RANGE_PORT'
    public static INVALID_RANGE_VOX_QUEUE = 'appsettings.INVALID_RANGE_VOX_QUEUE'
    public static INVALID_RANGE_VAD = 'appsettings.INVALID_RANGE_VAD'
    public static INVALID_RANGE_DA = 'appsettings.INVALID_RANGE_DA'
    public static INVALID_RANGE_AD = 'appsettings.INVALID_RANGE_AD'
    public static INVALID_RANGE_TIME = 'appsettings.INVALID_RANGE_TIME'
    public static INVALID_RANGE_SIP = 'appsettings.INVALID_RANGE_SIP'
    public static INVALID_RANGE_TONE = 'appsettings.INVALID_RANGE_TONE'
    public static INVALID_RANGE_BLOQ = 'appsettings.INVALID_RANGE_BLOQ'
    public static INVALID_RANGE_FREC = 'appsettings.INVALID_RANGE_FREC'
    public static INVALID_NAME = 'appsettings.INVALID_NAME'
    public static INVALID_AGV_NUMBER = 'appsettings.INVALID_AGV_NUMBER'
    public static INVALID_MASK = 'appsettings.INVALID_MASK'
    public static INVALID_URI = 'appsettings.INVALID_URI'
    public static ERROR_FORM = 'appsettings.ERROR_FORM'
    public static INVALID_FORM = 'appsettings.INVALID_FORM'
    public static RES_CREATE_ERROR = 'appsettings.RES_CREATE_ERROR'
    public static RES_EDIT_ERROR = 'appsettings.RES_EDIT_ERROR'
    public static RES_NAME_DUP = 'appsettings.RES_NAME_DUP'
    public static WRONG_RANKS = 'appsettings.WRONG_RANKS'
    public static WRONG_RANGE = 'appsettings.WRONG_RANGE'
    public static RANGE_0_250 = 'appsettings.RANGE_0_250'
    public static AVGN_PATTERN_ERROR = 'appsettings.AVGN_PATTERN_ERROR'

    public static controlRanges = {
        "ventana_bss": {min: 300, max: 2000, msg: "appsettings.controlRanges"},
        "retardo_fijo_climax": {min: 0, max: 200, msg: "appsettings.retardo_fijo_climax"}
    };
}