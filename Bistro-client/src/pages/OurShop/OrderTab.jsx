import MenuCard from "../../components/Shop/MenuCard"

const OrderTab = ({ items }) => {
      return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map(item => <MenuCard key={item._id} item={item} />)}
            </div>
      )
}

export default OrderTab