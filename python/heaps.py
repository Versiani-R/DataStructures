import heapq


if __name__ == '__main__':
    _list = [ 21, 1, 45, 78, 3, 5 ]

    heapq.heapify(_list)
    print(_list)

    _list.append(8)
    _list.append(2)
    _list.append(6)
    _list.append(7)
    # heapq.heappush(_list, 8)
    print(_list)

    heapq.heapify(_list)
    print(_list)
