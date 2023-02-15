import { useMutation } from "@apollo/client";
import Button from "@mui/material/Button";
import { OrderStatus, ShortOrderFragment } from "../graphql-generated/graphql";
import { updateOrderMutation } from "../graphql/orders/updateOrderMutation";

type Props = {
  order: ShortOrderFragment;
};

const ordersFlow = [
  OrderStatus.Open,
  OrderStatus.InProgress,
  OrderStatus.Complete,
];

export default function SwitchStatusButton({ order }: Props) {
  const [mutateFunction, { loading }] = useMutation(updateOrderMutation, {
    onError: (error) => {
      console.error(error);
    },
  });
  const nextStatus = ordersFlow[ordersFlow.indexOf(order.status) + 1];
  return (
    <>
      {nextStatus && (
        <Button
          variant="contained"
          onClick={() =>
            mutateFunction({
              variables: {
                updateOrderInput: {
                  _id: order._id,
                  status: nextStatus,
                  managerId: order.managerId,
                },
              },
            })
          }
          disabled={loading || !order.managerId}
          size="small"
          sx={{ ml: 1 }}
        >
          Switch to {nextStatus}
        </Button>
      )}
    </>
  );
}
