class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :bio
      t.string :summary
      t.string :phone
      t.string :email
      t.string :github
    end
  end
end
