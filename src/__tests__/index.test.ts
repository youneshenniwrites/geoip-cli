import { validateIP, getLocation } from "../index";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("validateIP", () => {
  it("should validate correct IP addresses", () => {
    expect(validateIP("192.168.1.1")).toBe(true);
    expect(validateIP("8.8.8.8")).toBe(true);
  });

  it("should reject invalid IP addresses", () => {
    expect(validateIP("256.1.2.3")).toBe(false);
    expect(validateIP("1.2.3")).toBe(false);
    expect(validateIP("abc.def.ghi.jkl")).toBe(false);
  });
});

describe("getLocation", () => {
  it("should return location data for valid IP", async () => {
    const mockResponse = {
      data: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    };

    mockedAxios.get.mockResolvedValue(mockResponse);

    const result = await getLocation("8.8.8.8");
    expect(result).toEqual({
      latitude: 37.7749,
      longitude: -122.4194,
    });
  });
});
