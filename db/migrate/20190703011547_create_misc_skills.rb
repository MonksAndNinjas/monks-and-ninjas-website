class CreateMiscSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :misc_skills do |t|
      t.belongs_to :profile, foreign_key: true
      t.string :name
    end
  end
end
