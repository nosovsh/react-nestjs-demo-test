import { useMutation } from "@apollo/client";
import Button from "@mui/material/Button";
import { ShortOrderFragment } from "../graphql-generated/graphql";
import { updateOrderMutation } from "../graphql/orders/updateOrderMutation";

type Props = {
  order: ShortOrderFragment;
};

export default function SetManagersButton({ order }: Props) {
  const [mutateFunction, { loading }] = useMutation(updateOrderMutation, {
    onError: (error) => {
      console.error(error);
    },
  });
  return (
    <>
      {!order.managerId && (
        <Button
          variant="contained"
          size="small"
          onClick={() =>
            mutateFunction({
              variables: {
                updateOrderInput: {
                  _id: order._id,
                  status: order.status,
                  managerId: "63c6d8bd46163a45eab88f7f",
                },
              },
            })
          }
          disabled={loading}
          sx={{ ml: 1 }}
        >
          Set random manager
        </Button>
      )}
    </>
  );
}
