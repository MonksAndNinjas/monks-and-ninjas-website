class Profile < ApplicationRecord
  has_many :technical_skills
  has_many :misc_skills
end
