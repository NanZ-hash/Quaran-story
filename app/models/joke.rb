class Joke < ApplicationRecord
    has_many :chapters , dependent: :destroy
end
