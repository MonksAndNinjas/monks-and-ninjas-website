class AddSummaryToNotes < ActiveRecord::Migration[5.2]
  def change
    add_column :notes, :summary, :string
  end
end
