import getCharts from "./index";

const url = "https://api.deezer.com/editorial/0/charts"

const res = {} as unknown as Response;
const req = {} as unknown as Request;
res.json = jest.fn();
res.status = jest.fn(() => res);

const mockData = { data: "mocked data" };

const fetchMock = jest
  .spyOn(global, 'fetch')
  .mockImplementation(() =>
    Promise.resolve({ json: () => Promise.resolve(mockData) })
  )


describe("getCharts function", () => {
  it("fetches data successfully from Deezer API", async () => {

    await getCharts(req, res);

    expect(fetchMock).toHaveBeenCalledWith(url);
    expect(res.json).toHaveBeenCalledWith(mockData);
  });

});
