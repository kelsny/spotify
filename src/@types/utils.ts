export type AtoZ =
    | "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | "H"
    | "I"
    | "J"
    | "K"
    | "L"
    | "M"
    | "N"
    | "O"
    | "P"
    | "Q"
    | "R"
    | "S"
    | "T"
    | "U"
    | "V"
    | "W"
    | "X"
    | "Y"
    | "Z";

export type CountryCode = `${AtoZ}${AtoZ}`;

export type InArray<T, X> = T extends readonly [X, ...infer _Rest]
    ? true
    : T extends readonly [X]
    ? true
    : T extends readonly [infer _, ...infer Rest]
    ? InArray<Rest, X>
    : false;

export type Popularity =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32
    | 33
    | 34
    | 35
    | 36
    | 37
    | 38
    | 39
    | 40
    | 41
    | 42
    | 43
    | 44
    | 45
    | 46
    | 47
    | 48
    | 49
    | 50
    | 51
    | 52
    | 53
    | 54
    | 55
    | 56
    | 57
    | 58
    | 59
    | 60
    | 61
    | 62
    | 63
    | 64
    | 65
    | 66
    | 67
    | 68
    | 69
    | 70
    | 71
    | 72
    | 73
    | 74
    | 75
    | 76
    | 77
    | 78
    | 79
    | 80
    | 81
    | 82
    | 83
    | 84
    | 85
    | 86
    | 87
    | 88
    | 89
    | 90
    | 91
    | 92
    | 93
    | 94
    | 95
    | 96
    | 97
    | 98
    | 99
    | 100;

export type OneToOneHundred = Exclude<Popularity, 0>;

export type Locale =
    | "af-ZA"
    | "am-ET"
    | "ar-AE"
    | "ar-BH"
    | "ar-DZ"
    | "ar-EG"
    | "ar-IQ"
    | "ar-JO"
    | "ar-KW"
    | "ar-LB"
    | "ar-LY"
    | "ar-MA"
    | "arn-CL"
    | "ar-OM"
    | "ar-QA"
    | "ar-SA"
    | "ar-SY"
    | "ar-TN"
    | "ar-YE"
    | "as-IN"
    | "az-Cyrl-AZ"
    | "az-Latn-AZ"
    | "ba-RU"
    | "be-BY"
    | "bg-BG"
    | "bn-BD"
    | "bn-IN"
    | "bo-CN"
    | "br-FR"
    | "bs-Cyrl-BA"
    | "bs-Latn-BA"
    | "ca-ES"
    | "co-FR"
    | "cs-CZ"
    | "cy-GB"
    | "da-DK"
    | "de-AT"
    | "de-CH"
    | "de-DE"
    | "de-LI"
    | "de-LU"
    | "dsb-DE"
    | "dv-MV"
    | "el-GR"
    | "en-029"
    | "en-AU"
    | "en-BZ"
    | "en-CA"
    | "en-GB"
    | "en-IE"
    | "en-IN"
    | "en-JM"
    | "en-MY"
    | "en-NZ"
    | "en-PH"
    | "en-SG"
    | "en-TT"
    | "en-US"
    | "en-ZA"
    | "en-ZW"
    | "es-AR"
    | "es-BO"
    | "es-CL"
    | "es-CO"
    | "es-CR"
    | "es-DO"
    | "es-EC"
    | "es-ES"
    | "es-GT"
    | "es-HN"
    | "es-MX"
    | "es-NI"
    | "es-PA"
    | "es-PE"
    | "es-PR"
    | "es-PY"
    | "es-SV"
    | "es-US"
    | "es-UY"
    | "es-VE"
    | "et-EE"
    | "eu-ES"
    | "fa-IR"
    | "fi-FI"
    | "fil-PH"
    | "fo-FO"
    | "fr-BE"
    | "fr-CA"
    | "fr-CH"
    | "fr-FR"
    | "fr-LU"
    | "fr-MC"
    | "fy-NL"
    | "ga-IE"
    | "gd-GB"
    | "gl-ES"
    | "gsw-FR"
    | "gu-IN"
    | "ha-Latn-NG"
    | "he-IL"
    | "hi-IN"
    | "hr-BA"
    | "hr-HR"
    | "hsb-DE"
    | "hu-HU"
    | "hy-AM"
    | "id-ID"
    | "ig-NG"
    | "ii-CN"
    | "is-IS"
    | "it-CH"
    | "it-IT"
    | "iu-Cans-CA"
    | "iu-Latn-CA"
    | "ja-JP"
    | "ka-GE"
    | "kk-KZ"
    | "kl-GL"
    | "km-KH"
    | "kn-IN"
    | "kok-IN"
    | "ko-KR"
    | "ky-KG"
    | "lb-LU"
    | "lo-LA"
    | "lt-LT"
    | "lv-LV"
    | "mi-NZ"
    | "mk-MK"
    | "ml-IN"
    | "mn-MN"
    | "mn-Mong-CN"
    | "moh-CA"
    | "mr-IN"
    | "ms-BN"
    | "ms-MY"
    | "mt-MT"
    | "nb-NO"
    | "ne-NP"
    | "nl-BE"
    | "nl-NL"
    | "nn-NO"
    | "nso-ZA"
    | "oc-FR"
    | "or-IN"
    | "pa-IN"
    | "pl-PL"
    | "prs-AF"
    | "ps-AF"
    | "pt-BR"
    | "pt-PT"
    | "qut-GT"
    | "quz-BO"
    | "quz-EC"
    | "quz-PE"
    | "rm-CH"
    | "ro-RO"
    | "ru-RU"
    | "rw-RW"
    | "sah-RU"
    | "sa-IN"
    | "se-FI"
    | "se-NO"
    | "se-SE"
    | "si-LK"
    | "sk-SK"
    | "sl-SI"
    | "sma-NO"
    | "sma-SE"
    | "smj-NO"
    | "smj-SE"
    | "smn-FI"
    | "sms-FI"
    | "sq-AL"
    | "sr-Cyrl-BA"
    | "sr-Cyrl-CS"
    | "sr-Cyrl-ME"
    | "sr-Cyrl-RS"
    | "sr-Latn-BA"
    | "sr-Latn-CS"
    | "sr-Latn-ME"
    | "sr-Latn-RS"
    | "sv-FI"
    | "sv-SE"
    | "sw-KE"
    | "syr-SY"
    | "ta-IN"
    | "te-IN"
    | "tg-Cyrl-TJ"
    | "th-TH"
    | "tk-TM"
    | "tn-ZA"
    | "tr-TR"
    | "tt-RU"
    | "tzm-Latn-DZ"
    | "ug-CN"
    | "uk-UA"
    | "ur-PK"
    | "uz-Cyrl-UZ"
    | "uz-Latn-UZ"
    | "vi-VN"
    | "wo-SN"
    | "xh-ZA"
    | "yo-NG"
    | "zh-CN"
    | "zh-HK"
    | "zh-MO"
    | "zh-SG";

export interface OptionalMessage {
    message?: string;
}
