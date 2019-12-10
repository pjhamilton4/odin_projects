#write your code here
def translate_word(input)
    vowel = ['a', 'e', 'i', 'o', 'u']
    if vowel.include?(input[0])
        input + "ay"
    elsif input[0..1] == "qu"
        input[2..-1] + "quay"
    elsif input[1..2] == "qu"
        input[3..-1] + input[0..2] + "ay"
    else
        if !vowel.include?(input[1])
            if !vowel.include?(input[2])
                input[3..input.length-1] + input[0, 3] +"ay"
            else
                input[2..input.length-1] + input[0, 1] + input[1, 1] + "ay"
            end
        else
            input[1..input.length-1] + input[0, 1] + "ay"
        end
    end
end

def translate(input)
    puts input
    input.split(" ").map{ | word | translate_word(word) }.join(' ')
end