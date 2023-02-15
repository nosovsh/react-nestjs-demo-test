import { useQuery } from "@apollo/client";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";

import { ordersQuery } from "../graphql/orders/ordersQuery";
import CreateOrderButton from "./CreateOrderButton";
import OrderHistoryDialog from "./OrderHistoryDialog";
import SetManagersButton from "./SetManagersButton";
import SwitchStatusButton from "./SwitchStatusButton";

export default function Orders() {
  const { data, refetch, error } = useQuery(ordersQuery, {});
  const [activeOrderId, setActiveOrderId] = React.useState<
    string | undefined
  >();

  if (error) {
    console.error(error);
    return <div>Error loading orders</div>;
  }

  return (
    <>
      <CreateOrderButton refetchOrders={refetch} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Updated</TableCell>
              <TableCell>Has manager</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.orders.map((order) => (
              <TableRow
                key={order._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.status}
                </TableCell>
                <TableCell component="th" scope="row">
                  {new Date(Number(order?.createdAt)).toLocaleString()}
                </TableCell>
                <TableCell component="th" scope="row">
                  {new Date(Number(order?.updatedAt)).toLocaleString()}
                </TableCell>
                <TableCell component="th" scope="row">
                  {order.managerId ? "Yes" : "No"}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    onClick={() => setActiveOrderId(order._id)}
                    size="small"
                  >
                    History
                  </Button>
                  <SetManagersButton order={order} />
                  <SwitchStatusButton order={order} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <OrderHistoryDialog
        orderId={activeOrderId}
        open={!!activeOrderId}
        handleClose={() => setActiveOrderId(undefined)}
      />
    </>
  );
}
