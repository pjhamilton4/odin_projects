#write your code here
def echo(word)
    return word
end

def shout(word)
    return word.upcase
end

def repeat(input, n=2)
    ([input] * n).join ' '
end

def start_of_word(input, n=1)
    input[0, n]
end

def first_word(input, n=1)
    input.split.first
end

def titleize(input)
    no_cap = ["and", "of", "the", "over", "to", "the", "a", "but"]
    capped = input.split(" ").map.with_index {
        |word, index| 
        if index == 0
            word.capitalize
        else
            no_cap.include?(word) ? word : word.capitalize
        end
    }.join(' ')
end