import { useQuery } from "@apollo/client";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { orderHistoryItemsQuery } from "../graphql/orders/orderWithHistoryItemsQuery";

type Props = {
  orderId?: string;
  open: boolean;
  handleClose: () => void;
};

export default function OrderHistoryDialog({
  orderId,
  open,
  handleClose,
}: Props) {
  const { data, error } = useQuery(orderHistoryItemsQuery, {
    variables: { id: orderId as string },
    skip: !orderId,
    fetchPolicy: "network-only",
  });

  if (error) {
    console.error(error);
    return <div>Error loading history</div>;
  }
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Order status change history</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Status</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.order.orderHistoryItems.map((orderHistoryItem) => (
                  <TableRow
                    key={orderHistoryItem._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {orderHistoryItem.status}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {new Date(
                        Number(orderHistoryItem.createdAt)
                      ).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
