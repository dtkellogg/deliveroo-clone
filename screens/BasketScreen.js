import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../features/restaurantSlice'
import { useDispatch, useSelector } from 'react-redux'

const BasketScreen = () => {
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const dispatch = useDispatch()

  // if the value of items doesn't change, the following won't recalculate
  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})

    setGroupedItemsInBasket(groupedItems)
  }, [items])

  console.log(groupedItemsInBasket)

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen