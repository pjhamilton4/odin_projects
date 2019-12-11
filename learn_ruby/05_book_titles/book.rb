class Book
# write your code here
    attr_accessor :title

    def initialize()
        @title = title
    end

    def title=(new_title)
        @title = titleize(new_title)
    end

    def titleize(input)
        no_cap = ["and", "of", "the", "over", "to", "the", "a", "but", "in", "an"]
        capped = input.split(" ").map.with_index {
            |word, index| 
            if index == 0
                word.capitalize
            else
                no_cap.include?(word) ? word : word.capitalize
            end
        }.join(' ')
    end

end

@book = Book.new
