import { SongMock } from '../../../../../mocks/index'
import searchSong from "./index";

const url = "https://api.deezer.com/search?q=mockparam"

const res = {} as unknown as Response;
const req = {query: {
  q: 'mockparam'
}} as unknown as Request;
res.json = jest.fn();
res.status = jest.fn(() => res);

const mockData = [SongMock];

const fetchMock = jest
  .spyOn(global, 'fetch')
  .mockImplementation(() =>
    Promise.resolve({ json: () => Promise.resolve(mockData) })
  )


describe("getCharts function", () => {
  it("fetches data successfully from Deezer API", async () => {

    await searchSong(req, res);

    expect(fetchMock).toHaveBeenCalledWith(url);
    expect(res.json).toHaveBeenCalledWith(mockData);
  });

});
