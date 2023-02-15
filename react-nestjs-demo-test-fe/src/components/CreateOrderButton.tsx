import { useMutation } from "@apollo/client";
import Button from "@mui/material/Button";
import { createOrderMutation } from "../graphql/orders/createOrderMutation";

type Props = {
  refetchOrders: () => void;
};

export default function CreateOrderButton({ refetchOrders }: Props) {
  const [mutateFunction, { loading }] = useMutation(createOrderMutation, {
    onCompleted: () => {
      refetchOrders();
    },
    onError: (error) => {
      console.error(error);
    },
  });
  return (
    <>
      <Button
        variant="contained"
        onClick={() => mutateFunction({ variables: { createOrderInput: {} } })}
        disabled={loading}
      >
        Create order
      </Button>
    </>
  );
}
