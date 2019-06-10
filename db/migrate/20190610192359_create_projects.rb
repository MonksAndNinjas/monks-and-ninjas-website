class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.string :date
      t.string :github
      t.string :video
      t.string :embed
    end
  end
end
