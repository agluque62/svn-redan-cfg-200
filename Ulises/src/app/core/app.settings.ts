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
    public static REAL_NUMBER = /^-?[0-9]+(\.[0-9])?[0-9]*$/;
    public static UMBRAL_VOX = /^-[0-9]{2}$/;
    public static COLA_VOX = /^[0-9]{1,2}$/;
    public static PORT = /^()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])$/;
    public static ONLY_NUMBERS = /^[0-9]+$/;

    // Informative Messages
    public static NUMBERS_FORMAT_INVALID = "Este campo solo admite números.";
    public static FIELD_REQUIRED = "Este campo es obligatorio.";
    public static INVALID_IP = "Debe introducir una IP válida.";
    public static INVALID_RANGE_PORT = "Este campo solo admite números en el rango de 1-65535.";
    public static INVALID_RANGE_VOX_QUEUE = "Valor fuera de rango (0, 30)";
    public static INVALID_RANGE_VAD = "Valor fuera de rango (-35, -15)";
    public static INVALID_RANGE_DA = "Valor fuera de rango (-24.3, 1.10)";
    public static INVALID_RANGE_AD = "Valor fuera de rango (-13.5, 1.20)";
    public static INVALID_RANGE_TIME = "Valor fuera de rango (0,600)";
    public static INVALID_RANGE_SIP = "Valor fuera de rango (10, 10000)";
    public static INVALID_RANGE_TONE = "Valor fuera de rango (1, 100)";
    public static INVALID_RANGE_BLOQ = "Valor fuera de rango (100, 1000)";
    public static INVALID_RANGE_FREC = "Formato de frecuencia no válido. Rangos permitidos: 118.000 - 137.995 | 200.000 - 399.995";
    public static INVALID_NAME = "No se pueden usar caracteres especiales como espacios,?,-,@, ni identificadores de usuario de longitud mayor de 32 caracteres.";
    public static INVALID_AGV_NUMBER = "Número no válido. El valor debe estar entre 200000 y 399999. Y debe ser de longitud 6";
    public static INVALID_MASK = "Debe introducir una máscara válida.";
    public static INVALID_URI = "El formato URI introducido no es correcto";
    public static ERROR_FORM = "Formulario inválido";
    public static INVALID_FORM = "Compruebe el formulario";
    public static RES_CREATE_ERROR = "Error al crear el recurso";
    public static RES_EDIT_ERROR = "Error al modificar el recurso";
    public static RES_NAME_DUP = "El nombre del recurso ya existe"
    public static WRONG_RANKS = "Existen rangos ATS incompletos";
    public static WRONG_RANGE = "Este campo solo admite números en el rango de 0-10";

    public static controlRanges = {
        "ventana_bss": {min: 300, max: 2000, msg: "Valor fuera de rango (300, 2000 ms)"},
        "retardo_fijo_climax": {min: 0, max: 200, msg: "Valor fuera de rango (0, 200 ms)"}
    };
}