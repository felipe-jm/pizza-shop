import { http, HttpResponse } from "msw";

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from "../get-order-details";

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>("/orders/:orderId", ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123123123",
    },
    status: "pending",
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: "order-item-1",
        priceInCents: 1000,
        product: {
          name: "Pizza Pineapple",
        },
        quantity: 1,
      },
      {
        id: "order-item-2",
        priceInCents: 2000,
        product: {
          name: "Pizza Cheese",
        },
        quantity: 2,
      },
    ],
    totalInCents: 3000,
  });
});
