import type { ListFormat } from "../types/ListFormat";

export const ListContent: ListFormat[] = [
    {title: "Élőhelyek", items: ["Afrikai szavanna", "Ázsiai esőerdő", "Dél-amerikai őserdő", "Sarki vidék", "Ausztráliai területek"]},
    {title: "Népszerű állatok", items: ["Oroszlán", "Zsiráf", "Panda", "Elefánt", "Pingvin"]},
    {title: "Táplálkozás", items: ["Növényevő", "Húsevő", "Mindenevő", "Gyümölcsevő", "Rovarokkal táplálkozó"]}
]

export const TudnivalokListContent: ListFormat = {
    title: "Amit érdemes megjegyezni", items: ["Minden állatfajnak sajátos táplálkozási igényei vannak.", 
        "Az állatok életkora és testsúlya fajonként, illetve egyedenként eltérhet."
    ]
}