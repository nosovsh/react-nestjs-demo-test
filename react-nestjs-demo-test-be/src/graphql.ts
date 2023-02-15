
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum OrderStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETE = "COMPLETE"
}

export class CreateOrderHistoryItemInput {
    exampleField?: Nullable<number>;
}

export class UpdateOrderHistoryItemInput {
    _id: number;
}

export class CreateOrderInput {
    managerId?: Nullable<string>;
}

export class UpdateOrderInput {
    _id: string;
    status?: Nullable<OrderStatus>;
    managerId?: Nullable<string>;
}

export class CreateUserInput {
    name: string;
}

export class UpdateUserInput {
    _id: string;
    name: string;
}

export class OrderHistoryItem {
    _id: string;
    createdAt: string;
    status: string;
    orderId: string;
}

export abstract class IQuery {
    abstract orderHistoryItems(): Nullable<OrderHistoryItem>[] | Promise<Nullable<OrderHistoryItem>[]>;

    abstract orderHistoryItem(id: number): Nullable<OrderHistoryItem> | Promise<Nullable<OrderHistoryItem>>;

    abstract orders(): Order[] | Promise<Order[]>;

    abstract order(id: string): Order | Promise<Order>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): User | Promise<User>;
}

export abstract class IMutation {
    abstract createOrderHistoryItem(createOrderHistoryItemInput: CreateOrderHistoryItemInput): OrderHistoryItem | Promise<OrderHistoryItem>;

    abstract updateOrderHistoryItem(updateOrderHistoryItemInput: UpdateOrderHistoryItemInput): OrderHistoryItem | Promise<OrderHistoryItem>;

    abstract removeOrderHistoryItem(id: number): Nullable<OrderHistoryItem> | Promise<Nullable<OrderHistoryItem>>;

    abstract createOrder(createOrderInput: CreateOrderInput): Order | Promise<Order>;

    abstract updateOrder(updateOrderInput: UpdateOrderInput): Order | Promise<Order>;

    abstract removeOrder(id: string): Nullable<Order> | Promise<Nullable<Order>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class Order {
    _id: string;
    status: OrderStatus;
    createdAt: string;
    updatedAt: string;
    orderHistoryItems: OrderHistoryItem[];
    managerId?: Nullable<string>;
}

export class User {
    _id: string;
    name: string;
}

type Nullable<T> = T | null;
