import {Map, OrderedMap} from 'immutable'

export function arrToMap(arr, DataRecord = Map) {
  return arr.reduce((acc, article) =>
    acc.set(article.id, new DataRecord(article))
  , new OrderedMap({}));
}

export function mapToArr(obj) {
  return obj.valueSeq().toArray()
}
