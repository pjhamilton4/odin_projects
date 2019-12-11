class Timer
  #write your code here
  attr_reader :seconds
  attr_writer :seconds

  def initialize
    @seconds = 0
  end

  def time_string
    hours = set_hours(seconds).to_s
    minutes = set_minutes(seconds).to_s
    seconds = @seconds.to_s
    hours = hours.length < 2 ? "0#{hours}" : hours
    minutes = minutes.length < 2 ? "0#{minutes}" : minutes
    seconds = seconds.length < 2 ? "0#{seconds}" : seconds
    "#{hours}:#{minutes}:#{seconds}"
  end

  def set_minutes(seconds)
    minutes_value = seconds / 60
    @seconds -= (minutes_value * 60)
    return minutes_value
  end

  def set_hours(seconds)
    hours_value = seconds / 60 / 60
    @seconds -= (hours_value * 60 * 60)
    return hours_value
  end
end