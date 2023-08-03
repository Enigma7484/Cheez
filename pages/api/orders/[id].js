import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";
import OrderDetail from "../../components/OrderDetail";

const handler = async (req, res) => {
    const { method, query: { id } } = req;

    await dbConnect();

    if (method === "GET") {
        try {
            const order = await Order.findById(id);
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "PUT") {
        try {
            const order = await Order.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(201).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "DELETE") {

    }
};

const OrderPage = ({ orderId }) => {
    return <OrderDetail orderId={orderId} />;
};

export async function getServerSideProps({ params }) {
    const orderId = params.orderId;
    return {
        props: {
            orderId,
        },
    };
}

export default handler; OrderPage;