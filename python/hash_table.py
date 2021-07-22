def create_hash(word: str):
    return len(word)


# O(n * t), 'n' being length of values, 't' being length of hash_table
def populate_hash_table(hash_table, values):
    for value in values:
        hash_value = create_hash(value)

        if hash_value in hash_table: hash_table[hash_value].append(value)
        else: hash_table[hash_value] = [value]


# O(n), 'n' being length of hash_table[hash_value], O(1) in real life
def does_element_exist_in_hash_table(hash_table, value):
    hash_value = create_hash(value)

    if not hash_value in hash_table: return False

    return value in hash_table[hash_value]


if __name__ == '__main__':
    hash_table = dict()

    names = [ 'Dr4kk0nnys', 'Bob', 'Alex', 'Creed', 'Ana', 'Joan', 'Timmy' ]

    # v1
    for name in names:
        hash_table[name] = 'Some important value ' + name

    # constant lookup time. Output: 'Some important value Dr4kk0nnys'
    print(hash_table['Dr4kk0nnys'])


    # v2
    hash_table = dict()
    populate_hash_table(hash_table, names)

    # O(n), 'n' being the size of hash_table[create_hash('Ana')]. In real life, is constant lookup time
    print(does_element_exist_in_hash_table(hash_table, 'Ana'))
    print(hash_table)
