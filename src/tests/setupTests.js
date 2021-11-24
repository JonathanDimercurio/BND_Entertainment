/*
 *  Author: Christopher Muller
 */
import { server, rest } from "../mocks/server.js";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
