class CreateTechnicalSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :technical_skills do |t|
      t.belongs_to :profile, foreign_key: true
      t.string :name
    end
  end
end
