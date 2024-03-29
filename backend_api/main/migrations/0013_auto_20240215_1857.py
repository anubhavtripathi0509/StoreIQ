# Generated by Django 3.2.4 on 2024-02-15 13:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0012_product_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='usd_price',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
    ]
